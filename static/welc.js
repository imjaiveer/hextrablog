document.addEventListener('DOMContentLoaded', function () {
    const fileUrl = 'https://nicestore23.s3.us-east-005.backblazeb2.com/imjaiveer_blog/wel1.txt';
    const targetElement = document.getElementById('text-file-content');

    fetch(fileUrl)
        .then(response => response.text())
        .then(text => {
            targetElement.textContent = text;
        })
        .catch(error => console.error('Error fetching text file:', error));
});