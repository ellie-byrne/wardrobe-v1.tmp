
// import React from "react";

// // THIS IS TO BE SWAPPED with home

// const Projects = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Projects;

import ItemSubmissionForm from '../components/ui/ItemSubmissionForm';  // adjust the path based on your file structure

function AddItemPage() {
  return (
    <div className="container mx-auto py-8">
      <ItemSubmissionForm />
    </div>
  );
}

export default AddItemPage;