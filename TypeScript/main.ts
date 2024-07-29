interface Data{
    data:string;
  }
  interface AdditionalData{
    additionalData:string;
  }
  
  
  
  function fetchData(url:string):Promise<Data> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url === 'https://api.example.com/data') {
            resolve({ data: 'Sample Data' });
          } else {
            reject(new Error('Invalid URL'));
          }
        }, 1000);
      });
    }
    
    function fetchAdditionalData():Promise<AdditionalData> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ additionalData: 'More Sample Data' });
        }, 500);
      });
    }
    
    async function fetchWithAsyncAwait(url:string):Promise<Data & AdditionalData>{
      try {
        const data = await fetchData(url);
        console.log('Fetched data:', data);
    
        const additionalData = await fetchAdditionalData();
        console.log('Fetched additional data:', additionalData);
    
        return { ...data, ...additionalData };
      } catch (error:any) {
        console.error('Error:', error.message);
        throw error;
      }
    }
   
    fetchWithAsyncAwait('https://api.example.com/data')
      .then(combinedData => {
        console.log('Combined data:', combinedData);
      })
      .catch(error => {
        console.error('Error in main function:', error.message);
      });