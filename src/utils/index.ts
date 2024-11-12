export function fileToBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader:any = new FileReader();
      
      // Read file content on load
      reader.onload = () => {
        const base64String:any = reader.result.split(',')[1]; // Get the base64 part of the data URL
        resolve(base64String);
      
      };
      
      reader.onerror = (error:any) => {
        reject(error);
      };
      
      reader.readAsDataURL(file); // Read the file as a Data URL
    });
  }
  