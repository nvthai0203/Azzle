function playVideo() {
    const container = document.getElementById("video-container");

    container.innerHTML = `
              <iframe
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/3nQNiWdeH2Q?autoplay=1"
                  title="Samar video"
                  frameborder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowfullscreen>
              </iframe>

              <button
                  type="button"
                  onclick="closeVideo()"
                  aria-label="Close video"
                  class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-black"
              >
                  &times;
              </button>
          `;

    container.classList.add("relative");
}

function closeVideo() {
    const container = document.getElementById("video-container");

    container.innerHTML = `
              <img
                  src="assets/images/funfact-image.jpg"
                  alt="People working with an analytics dashboard"
                  class="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
              />

              <button
                  type="button"
                  onclick="playVideo()"
                  aria-label="Play video"
                  class="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
              >
                  <div
                      class="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-[#FE330A] hover:text-white"
                  >
                      Play
                      <div
                          class="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30"
                      ></div>
                  </div>
              </button>
          `;
}

// Hiệu ứng đếm số phần trăm khi cuộn tới
const statsSection = document.getElementById("stats");
const counters = document.querySelectorAll(".counter");

const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counters.forEach((counter) => {
                    const target = Number(counter.dataset.target);
                    const duration = 1500;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1,
                        );

                        counter.textContent = Math.floor(target * progress);

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    }

                    counter.textContent = 0;
                    requestAnimationFrame(updateCounter);
                });
            }
        });
    },
    {
        threshold: 0.3,
    },
);

if (statsSection) {
    statsObserver.observe(statsSection);
}