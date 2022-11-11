async function search_movie() {
  try {
    let movie_name = document.getElementById("live_search").value;

    const api_key = "AIzaSyDgdFZNY17Jup6fZqrVtBNDoLNXYgsR5mk";
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${movie_name}&key=${api_key}`
    );

    let data = await response.json();
    let actual_data = data.items;
    append_movie(actual_data);
    console.log(actual_data);
  } catch (err) {
    console.log(err);
  }
}

let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

function append_movie(data) {
  let m_div = document.getElementById("movies");
  m_div.innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    //here you are passing videoId also
    let div = document.createElement("div");
    let p_title = document.createElement("p");
    p_title.innerText = snippet.title;
    let p_channel_name = document.createElement("p");
    p_channel_name.innerText = snippet.channelTitle;

    let thumbnail = document.createElement("img");
    thumbnail.src = snippet.thumbnails.high.url;
    thumbnail.style.height="30vh";
    div.append(thumbnail, p_title, p_channel_name);
    div.onclick = () => {
      let data = {
        snippet,
        videoId,
      };
      data = JSON.stringify(data);
      localStorage.setItem("clicked_video", data);
      window.location.href = "video.html";
    };
    m_div.append(div);
  });
}
