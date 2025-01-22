document.addEventListener("DOMContentLoaded", () => {
  // Selectors for audio player components
  const trendingContent = document.getElementById("trending-content");
  const topChartsContent = document.getElementById("top-charts-content");
  const newreleasesContent = document.getElementById("new-releases-content");
  const popContent = document.getElementById("pop-content");
  const rockContent = document.getElementById("rock-content");
  const hiphopContent = document.getElementById("hiphop-content");
  const classicalContent = document.getElementById("classical-content");
  const audioPlayer = document.getElementById("audioPlayer");
  const playerLine = document.getElementById("playerLine");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const currentSongTitle = document.getElementById("currentSongTitle");
  const seekBar = document.getElementById("seekBar");
  const volumeControl = document.getElementById("volumeControl");

  // Fetch the JSON data
  fetch('index.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const trendingNow = data.trendingnow;
      renderTrendingSongs(trendingNow);
      const topChart = data.topchart;
      renderTopChartSongs(topChart);
      const newreleases = data.newreleases;
      rendernewreleasesSongs(newreleases);
      const pop = data.pop;
      renderpopSongs(pop);
      const rock = data.rock;
      renderrockSongs(rock);
      const hiphop = data.hiphop;
      renderhiphopSongs(hiphop);
      const classical = data.classical;
      renderclassicalSongs(classical);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });


  function renderTrendingSongs(songs) {
    if (!songs || !songs.length) {
      trendingContent.innerHTML = `<p class="text-center text-muted">No trending songs available at the moment.</p>`;
      return;
    }
    trendingContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
              <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }


  function renderTopChartSongs(songs) {
    if (!songs || !songs.length) {
      topChartsContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    topChartsContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function rendernewreleasesSongs(songs) {
    if (!songs || !songs.length) {
      newreleasesContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    newreleasesContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderpopSongs(songs) {
    if (!songs || !songs.length) {
      popContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    popContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderrockSongs(songs) {
    if (!songs || !songs.length) {
      rockContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    rockContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderhiphopSongs(songs) {
    if (!songs || !songs.length) {
      hiphopContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    hiphopContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderclassicalSongs(songs) {
    if (!songs || !songs.length) {
      classicalContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    classicalContent.innerHTML = songs
      .map(song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  // Function to play a song
  window.playSong = (songSrc, songTitle) => {
    if (!songSrc) {
      alert("Audio source is unavailable.");
      return;
    }
    // Update the audio source and play
    audioPlayer.src = songSrc;
    audioPlayer.play();
    // Show the player and update song title
    playerLine.style.display = "flex";
    currentSongTitle.textContent = `Now Playing: ${songTitle}`;
    playPauseBtn.textContent = "⏸";
  };

  // Function to toggle play/pause
  window.togglePlay = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "⏯";
    }
  };
  // Event listener to update seek bar as the song plays
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress || 0;
  });

  // Event listener to allow seeking through the song
  seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });
  
  // Event listener to adjust volume
  volumeControl.addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value;
  });
})  
