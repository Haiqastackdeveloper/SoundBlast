document.addEventListener("DOMContentLoaded", () => {
  const trendingContent = document.getElementById("trending-content");
  const topChartsContent = document.getElementById("top-charts-content");
  const newreleasesContent = document.getElementById("new-releases-content");
  const popContent = document.getElementById("pop-content");
  const rockContent = document.getElementById("rock-content");
  const hiphopContent = document.getElementById("hiphop-content");
  const classicalContent = document.getElementById("classical-content");
  const englishContent = document.getElementById("english-content");
  const hindiContent = document.getElementById("hindi-content");
  const koreanContent = document.getElementById("korean-content");
  const spanishContent = document.getElementById("spanish-content");
  const TopArtist = document.getElementById("artist-content");
  const searchContent = document.getElementById("search-content");
  const oldsongsContent = document.getElementById("old-songs-content");
  const audioPlayer = document.getElementById("audioPlayer");
  const playerLine = document.getElementById("playerLine");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const currentSongTitle = document.getElementById("currentSongTitle");
  const seekBar = document.getElementById("seekBar");
  const volumeControl = document.getElementById("volumeControl");


  fetch('assets/data/index.json')
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
      const TopArtist = data.TopArtist;
      renderTopArtistSongs(TopArtist);
      const oldsongs = data.oldsongs;
      renderoldsongsSongs(oldsongs);
      const english = data.english;
      renderenglishSongs(english);
      const hindi = data.hindi;
      renderhindiSongs(hindi);
      const korean = data.korean;
      renderkoreanSongs(korean);
      const spanish = data.spanish;
      renderspanishSongs(spanish);
      const search = data.search;
      rendersearchSongs(search);
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
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
              <div class="card-body">
                <h5 class="card-title">${song.title}</h5>
                <p class="card-text">${song.artist}</p>
                <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
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
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
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
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
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
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
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
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
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
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
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
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderoldsongsSongs(songs) {
    if (!songs || !songs.length) {
      oldsongsContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    oldsongsContent.innerHTML = songs
      .map(song => `
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderenglishSongs(songs) {
    if (!songs || !songs.length) {
      englishContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    englishContent.innerHTML = songs
      .map(song => `
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderhindiSongs(songs) {
    if (!songs || !songs.length) {
      hindiContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    hindiContent.innerHTML = songs
      .map(song => `
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderkoreanSongs(songs) {
    if (!songs || !songs.length) {
      koreanContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    koreanContent.innerHTML = songs
      .map(song => `
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderspanishSongs(songs) {
    if (!songs || !songs.length) {
      spanishContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    spanishContent.innerHTML = songs
      .map(song => `
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function rendersearchSongs(songs) {
    if (!songs || !songs.length) {
      searchContent.innerHTML = `<p class="text-center text-muted">No top chart songs available at the moment.</p>`;
      return;
    }
    searchContent.innerHTML = songs
      .map(song => `
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
 <p class="card-text">${song.artist}</p>
              <button class="btn btn-dark" onclick="playSong('${song.audio}', '${song.title}')">Play Now</button>
            </div>
          </div>
        </div>
      `)
      .join("");
  }
  function renderTopArtistSongs(artists) {
    if (!artists || !artists.length) {
        TopArtist.innerHTML = `<p class="text-center text-muted">No top artists available at the moment.</p>`;
        return;
    }
    TopArtist.innerHTML = artists
        .map(artist => `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card text-center h-100">
                    <img src="${artist.image}" class="card-img-top" alt="${artist.name}">
                    <div class="card-body">
                        <h5 class="card-title">${artist.name}</h5>
                    </div>
                </div>
            </div>
        `)
        .join("");
}
  window.playSong = (songSrc, songTitle) => {
    if (!songSrc) {
      alert("Audio source is unavailable.");
      return;
    }
    audioPlayer.src = songSrc;
    audioPlayer.play();
    playerLine.style.display = "flex";
    currentSongTitle.textContent = `Now Playing: ${songTitle}`;
    playPauseBtn.textContent = "⏸";
  };
  window.togglePlay = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "⏯";
    }
  };
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress || 0;
  });
  seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });
  volumeControl.addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value;
  });
});