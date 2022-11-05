import React from 'react';
import "../Styles/GoogleSearch.css";

function GoogleSearch() {


    
  return (
    <div>
       <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
 <div>
    <input type="text" id="q" name="q" alt="Search Text" maxlength="256" className='style'/>
    <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
   <input type="Submit" id="searchSubmit" name="submit" alt="Go"  value={'Go'} className='style2'/>
 </div>
</form>

</div>
  )
}

export default GoogleSearch