export function formatDate(dateString) {
  const date = new Date(dateString);
  
  // Define options for toLocaleDateString
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  
  // Use toLocaleDateString to format the date
  const formattedDate = date.toLocaleDateString('en-GB', options);
  
  return formattedDate;
}