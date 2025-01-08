function showDiamondContent(stageId) {
  const targetContent = document.getElementById(`diamond-content-${stageId}`);
  
  // Toggle visibility of the content
  if (targetContent.classList.contains('active')) {
    targetContent.classList.add('hidden');
    targetContent.classList.remove('active');
  } else {
    // Hide all other content
    const allContents = document.querySelectorAll('.diamond-content');
    allContents.forEach((content) => content.classList.add('hidden'));
    allContents.forEach((content) => content.classList.remove('active'));
    
    // Show the selected content
    targetContent.classList.remove('hidden');
    targetContent.classList.add('active');
  }
}
