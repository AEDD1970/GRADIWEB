 async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la solicitud fetch:', error.message);
      throw error;
    }
  }
  
 
  window.api = {
    get: fetchData
};