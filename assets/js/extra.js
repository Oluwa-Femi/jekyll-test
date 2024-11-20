function searchPage() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a'); // Add any other elements you want to search through
    
    let results = [];
  
    elementsToSearch.forEach(element => {
      if (element.innerText.toLowerCase().includes(searchTerm)) {
        results.push(element);
      }
    });
  
    // Clear previous highlights
    elementsToSearch.forEach(element => {
      element.innerHTML = element.innerHTML.replace(/<mark>|<\/mark>/g, '');
    });
  
    // Highlight results and scroll to the first result
    if (results.length > 0) {
      results.forEach(result => {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        result.innerHTML = result.innerHTML.replace(regex, '<mark>$1</mark>');
      });
      results[0].scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('No results found');
    }
  }