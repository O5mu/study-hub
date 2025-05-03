import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:5000/api';

/**
 * Custom hook for making API requests to the backend without authentication
 * @param {string} endpoint - The API endpoint to fetch from
 * @param {Object} options - Optional fetch options
 * @returns {Object} - Contains data, loading state, error state, and functions to interact with the API
 */
const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = useCallback(() => ({
    'Content-Type': 'application/json',
    ...options.headers
  }), [options.headers]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        ...options,
        headers: headers()
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [endpoint, options, headers]);

  /**
   * Create a new resource
   * @param {Object} body - The data to create with
   */
  const create = async (body) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(body)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to create resource');
      }
      
      setData(prevData => {
        if (Array.isArray(prevData)) {
          return [...prevData, result];
        }
        return result;
      });
      
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Update a resource
   * @param {string} id - The ID of the resource to update
   * @param {Object} body - The updated data
   */
  const update = async (id, body) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(body)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to update resource');
      }
      
      // Update the local data state
      setData(prevData => {
        if (Array.isArray(prevData)) {
          return prevData.map(item => (item._id === id ? result : item));
        }
        return result;
      });
      
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Delete a resource
   * @param {string} id - The ID of the resource to delete
   */
  const remove = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'DELETE',
        headers
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to delete resource');
      }
      
      // Update the local data state
      setData(prevData => {
        if (Array.isArray(prevData)) {
          return prevData.filter(item => item._id !== id);
        }
        return null;
      });
      
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch a single resource by ID
   * @param {string} id - The ID of the resource to fetch
   */
  const getById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
        headers
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch resource');
      }
      
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  /**
   * Refresh data from the API
   */
  const refresh = () => {
    fetchData();
  };

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refresh,
    create,
    update,
    remove,
    getById
  };
};

export default useApi;