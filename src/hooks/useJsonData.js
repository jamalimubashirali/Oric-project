// Custom hook for managing JSON data
import { useState, useEffect } from 'react';

// Custom hook to load and manage JSON data
export const useJsonData = (dataFile) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await import(`../data/${dataFile}`);
        setData(response.default);
        setError(null);
      } catch (err) {
        setError(`Failed to load ${dataFile}: ${err.message}`);
        console.error(`Error loading ${dataFile}:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataFile]);

  return { data, loading, error };
};

// Hook for managing multiple data files
export const useMultipleJsonData = (dataFiles) => {
  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loadAllData = async () => {
      setLoading(true);
      const dataPromises = Object.entries(dataFiles).map(async ([key, filename]) => {
        try {
          const response = await import(`../data/${filename}`);
          return [key, response.default];
        } catch (err) {
          setErrors(prev => ({ ...prev, [key]: err.message }));
          return [key, null];
        }
      });

      const results = await Promise.all(dataPromises);
      const dataObject = Object.fromEntries(results);
      setAllData(dataObject);
      setLoading(false);
    };

    loadAllData();
  }, []);

  return { allData, loading, errors };
};

// Utility functions for data filtering and searching
export const filterData = (data, searchTerm, searchFields) => {
  if (!searchTerm || !data) return data;
  
  const searchLower = searchTerm.toLowerCase();
  return data.filter(item => 
    searchFields.some(field => 
      item[field]?.toLowerCase().includes(searchLower)
    )
  );
};

export const sortData = (data, sortField, sortOrder = 'asc') => {
  if (!data || !sortField) return data;
  
  return [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
};

export const paginateData = (data, page, itemsPerPage) => {
  if (!data) return { items: [], totalPages: 0 };
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  return { items, totalPages, currentPage: page };
};

// Example usage:
/*
// Single data file
const { data: fundingData, loading, error } = useJsonData('fundingOpportunitiesNew.json');

// Multiple data files
const { allData, loading, errors } = useMultipleJsonData({
  funding: 'fundingOpportunitiesNew.json',
  projects: 'fundedProjectsNew.json',
  team: 'teamData.json'
});

// In component:
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;

return (
  <div>
    {fundingData.sections.map(section => (
      <SectionComponent key={section.id} section={section} />
    ))}
  </div>
);
*/
