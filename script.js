<script>
  
    // 🌟 生成背景星星
    const starsBackground = document.getElementById('starsBackground');
    const totalStars = 250;
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDuration = (Math.random() * 3 + 2).toFixed(2) + 's';
      star.style.opacity = Math.random();
      starsBackground.appendChild(star);
    }

    // 🌠 生成流星
    const meteorCount = 3000;
    const starField = document.getElementById('starField');
    for (let i = 0; i < meteorCount; i++) {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      meteor.style.left = Math.random() * 100 + 'vw';
      meteor.style.animationDuration = (Math.random() * 1 + 0.6).toFixed(2) + 's';
      meteor.style.animationDelay = (Math.random() * 6).toFixed(2) + 's';
      starField.appendChild(meteor);
    }

    // 📸 相册排布
    const carousel = document.getElementById('carousel');
    const images = carousel.children;
    const angle = 360 / images.length;
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `rotateY(${i * angle}deg) translateZ(500px)`;
    }

    // 🔠 打字效果
    const text = "Happy Birthday我的同桌，Shirley MOk Xue Ling ✨";
    const caption = document.getElementById('caption');
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        caption.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();

    // 🖼️ 点击放大图片
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    Array.from(images).forEach(img => {
      img.onclick = function () {
        lightboxImg.src = this.src;
        lightbox.style.display = 'flex';
      };
    });
	
	// 🎵 播放按钮控制音乐
	const music = document.getElementById("bgMusic");
	const btn = document.getElementById("musicBtn");
	
	btn.addEventListener("click", () => {
	  if (music.paused) {
	    music.play();
		btn.textContent = "🎵 暂停音乐";
	  } else {
	    music.pause();
		btn.textContent = "🎵 播放音乐";
	  }
	});
	
  </script>