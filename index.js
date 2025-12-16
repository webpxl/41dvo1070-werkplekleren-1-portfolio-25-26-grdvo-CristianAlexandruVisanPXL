// Synchroniseer zowel width als height van de box met de cv-afbeelding
const cvImage = document.getElementById('cvImage');
const cvBox = document.getElementById('cvBox');

function syncCvBoxSize(){
	if(!cvImage || !cvBox) return;

	// Gebruik client sizes; fallback naar 150x150 als nog 0
	const w = cvImage.clientWidth || 150;
	const h = cvImage.clientHeight || 150;

	cvBox.style.width = w + 'px';
	cvBox.style.height = h + 'px';
}

// Gebruik ResizeObserver als beschikbaar om wijzigingen aan de afbeelding te volgen
if (window.ResizeObserver && cvImage) {
	const ro = new ResizeObserver(syncCvBoxSize);
	ro.observe(cvImage);
}

// Fallbacks
window.addEventListener('load', syncCvBoxSize);
window.addEventListener('resize', syncCvBoxSize);
if (cvImage) {
	cvImage.addEventListener('load', syncCvBoxSize);
}