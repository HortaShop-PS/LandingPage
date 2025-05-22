
document.addEventListener('DOMContentLoaded', function() {
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'final.json',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            clearCanvas: false,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    });

    
    animation.addEventListener('DOMLoaded', function() {
        console.log('Animation loaded successfully');
        
        document.getElementById('lottie-container').style.opacity = '1';
    });

    animation.addEventListener('error', function(error) {
        console.error('Animation error:', error);
    });
});


function adjustLayers() {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    
    const lottieContainer = document.getElementById('lottie-container');
    const sizeMultiplier = window.innerWidth <= 480 ? 0.9 : 0.5;
const size = Math.min(containerWidth, containerHeight) * sizeMultiplier;
    lottieContainer.style.width = `${size}px`;
    lottieContainer.style.height = `${size}px`;
    
   
    lottieContainer.style.left = `${(containerWidth - size) / 2}px`;
    lottieContainer.style.top = `${(containerHeight - size) / 2}px`;
}


window.addEventListener('load', function() {
    adjustLayers();
    adjustBlurForScreenSize();
});
window.addEventListener('resize', function() {
    adjustLayers();
    adjustBlurForScreenSize();
});


document.addEventListener('mousemove', function(e) {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 5; 
    const yPos = (e.clientY / window.innerHeight - 0.5) * 5;
    

    const layer1 = document.querySelector('#layer1 img');
    const layer2 = document.querySelector('#layer2 img');
    const layer3 = document.querySelector('#layer3 img');
    
    if (layer1) layer1.style.transform = `translate(${xPos * 1.0}px, ${yPos * 1.0}px)`; 
    if (layer2) layer2.style.transform = `translate(${xPos * 2.0}px, ${yPos * 2.0}px)`; 
    if (layer3) layer3.style.transform = `translate(${xPos * 3.0}px, ${yPos * 3.0}px)`;
});


function adjustBlurForScreenSize() {
    const width = window.innerWidth;
    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const layer3 = document.getElementById('layer3');
    
    if (width <= 480) { 
        layer1.style.filter = 'blur(0px)'; 
        layer2.style.filter = 'blur(3px)'; 
        layer3.style.filter = 'blur(6px)'; 
    } else if (width <= 768) { 
        layer1.style.filter = 'blur(0px)';
        layer2.style.filter = 'blur(3px)';
        layer3.style.filter = 'blur(6px)'; 
    } else { 
        layer1.style.filter = 'blur(0px)';
        layer2.style.filter = 'blur(3px)'; 
        layer3.style.filter = 'blur(6px)';
    }
}