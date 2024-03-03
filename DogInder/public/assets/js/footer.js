document.addEventListener('DOMContentLoaded', setCopyRightYear);

function setCopyRightYear() {
    const copyRight = document.getElementById("copyright-year")
    const year = new Date().getFullYear();
    copyRight.textContent = `© ${year}`;
}

// water css