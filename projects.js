// Add or edit project information and image paths here.
const projects = {
  "environmental-monitor": {
    title: "EnviroMonitor",
    description: "An ESP32-based environmental monitoring and alert system that brings real-time sensing, embedded control, wireless communication, and user interaction together in one platform.",
    github: "https://github.com/Abu-Git21/EnviromentMonitor",
    mainImage: "FINAL.png",
    demoVideo: "assets/enviromonitor-demo.mp4",

    // Environment photos appear directly below the demo video.
    environmentPhotos: [
      { src: "assets/Room.jpeg", label: "Bedroom setup" },
      { src: "assets/Room Close.jpeg", label: "Bedroom close-up" },
      { src: "assets/Out.jpeg", label: "Outdoor setup" },
      { src: "assets/Out Close.jpeg", label: "Outdoor close-up" },
      { src: "assets/Garage.jpeg", label: "Garage setup" },
      { src: "assets/Garage Close.jpeg", label: "Garage close-up" }
    ],

    // Hardware and component photos appear after the environment photos.
    components: [
      { src: "assets/enviromonitor-circuit.jpeg", label: "Circuit and wiring" },
      { src: "assets/enviromonitor-display.jpeg", label: "TFT display" },
      { src: "assets/enviromonitor-scd30.jpeg", label: "SCD30 CO₂, temperature, and humidity sensor" },
      { src: "assets/enviromonitor-ldr.jpeg", label: "LDR light sensor" },
      { src: "assets/enviromonitor-ultrasonic.jpeg", label: "Ultrasonic distance sensors" },
      { src: "assets/enviromonitor-setup.jpeg", label: "ESP32 and complete hardware setup" }
    ],

    about: {
        paragraphs: [
          "EnviroMonitor is an ESP32-based environmental monitoring system designed to collect and display information about the surrounding environment. It uses an SCD30 sensor to measure carbon dioxide (CO₂) concentration, temperature, and humidity. These measurements provide several indicators of the air conditions around the device.",

          "An LDR (light-dependent resistor) is used to measure changes in ambient light. Its readings allow the system to track how bright or dark the surrounding area is. Together, the SCD30 and LDR provide the system with information about both air conditions and light levels.",

          "The ESP32 acts as the main controller. It reads the sensor measurements, processes the incoming data, and sends the results to a 2.8-inch TFT display. The display presents the readings in an organized visual format, allowing the user to check the current measurements directly on the device instead of relying on a separate computer.",

          "By combining the sensors, microcontroller, and display, EnviroMonitor brings data collection and visual feedback together in one embedded system. The project demonstrates how sensor inputs can be read by a microcontroller, processed, and presented in a form that is easy for a user to view."
        ],
        features: [
          "SCD30 CO₂, temperature, and humidity monitoring",
          "LDR ambient light measurement",
          "ESP32 sensor data processing",
          "Real-time sensor readings on a 2.8-inch TFT display"
        ]
      }
    },

  "alarm-clock": {
    title: "Digital Alarm Clock PCBA",
    description: "A working digital alarm clock I built and programmed using an ATmega4809 microcontroller, with a 7-segment display, push-button controls, and alarm functionality.",
    github: "https://github.com/Abu-Git21/Digital-Alarm-Clock-PCBA/tree/main",
    mainImage: "assets/alarm-clock.jpeg",
    demoVideo: "assets/alarm-clock-demo.mp4",
    environmentPhotos: [],
    components: [
      { src: "assets/alarm-clock-pcb.jpg", label: "PCB photo" },
      { src: "assets/alarm-clock-assembly.jpg", label: "Assembly photo" },
      { src: "assets/alarm-clock-display.jpg", label: "Clock display" }
    ],
    about: {
      heading: "About the clock",
      listHeading: "Skills",
      paragraphs: [
        "I built and programmed a digital alarm clock around an ATmega4809 microcontroller. The finished system uses a 7-segment display to show the time and push buttons to control the clock and alarm settings.",
        "I connected and soldered the electronic components needed for the clock, including resistors, capacitors, LEDs, push buttons, transistors, and the display. I then wrote the embedded code that controls the display, reads button input, keeps track of time, and activates the alarm.",
        "This project gave me hands-on experience creating a complete hardware-and-software system. It strengthened my skills in embedded programming, troubleshooting circuits, debugging code, and making a physical device respond reliably to user input."
      ],
      features: [
        "ATmega4809",
        "Embedded C",
        "Microcontroller programming",
        "Soldering",
        "Digital electronics",
        "Hardware debugging",
        "Push-button controls",
        "7-segment displays"
      ]
    }
  }
};

const id = new URLSearchParams(window.location.search).get("id");
const project = projects[id];
const content = document.querySelector("#project-content");

if (!content) {
  console.error('Missing element: #project-content');
} else if (!project) {
  content.innerHTML = '<h1>Project not found</h1><p><a href="index.html">Back to projects</a></p>';
} else {
  document.title = `${project.title} — My Portfolio`;

  // Keep the gallery readable even if the page has no separate CSS file.
  if (!document.querySelector("#project-media-styles")) {
    const style = document.createElement("style");
    style.id = "project-media-styles";
    style.textContent = `
      .media-section { margin: 2rem 0; padding: 1.5rem 0; border-top: 1px solid #dedbd2; }
      .media-section h2 { margin: 0 0 1rem; }
      .media-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 1rem; }
      .project-gallery { width: 100%; }
      .gallery-item { min-width: 0; margin: 0; overflow: hidden; border: 1px solid rgba(30, 45, 65, .14); border-radius: 14px; background: #eef2f8; }
      .gallery-item img, .gallery-item video { display: block; width: 100%; height: auto; max-height: 620px; object-fit: contain; background: #101827; }
      .media-image-slot img { aspect-ratio: 4 / 3; object-fit: cover; }
      .image-open { position: relative; display: block; width: 100%; padding: 0; border: 0; background: transparent; cursor: zoom-in; }
      .image-zoom-hint { position: absolute; right: .65rem; bottom: .65rem; padding: .35rem .6rem; border-radius: 999px; color: white; background: rgba(15, 23, 42, .75); font-size: .75rem; opacity: 0; transition: opacity .18s ease; }
      .image-open:hover .image-zoom-hint, .image-open:focus-visible .image-zoom-hint { opacity: 1; }
      .gallery-item figcaption { padding: .65rem .8rem; color: #40516a; font-size: .85rem; }
      .image-lightbox { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center; justify-content: center; padding: 3rem; background: rgba(5, 10, 20, .9); }
      .image-lightbox.is-open { display: flex; }
      .image-lightbox img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px; }
      .lightbox-close { position: absolute; top: 1rem; right: 1.25rem; width: 2.5rem; height: 2.5rem; border: 0; border-radius: 50%; color: #152238; background: white; font-size: 1.7rem; cursor: pointer; }
      .missing-image { display: none !important; }
      @media (max-width: 600px) { .media-section { margin: 1.25rem 0; padding: 1rem 0; } .image-lightbox { padding: 1rem; } }
    `;
    document.head.appendChild(style);
  }

  const imageCard = (item) => `
    <figure class="gallery-item media-image-slot">
      <button class="image-open" type="button" aria-label="Open ${item.label}">
        <img src="${item.src}" alt="${item.label}" onerror="this.closest('.gallery-item').classList.add('missing-image')" />
        <span class="image-zoom-hint">Click to enlarge</span>
      </button>
      <figcaption>${item.label}</figcaption>
    </figure>`;

  const renderImageSection = (heading, items) => items && items.length ? `
    <section class="media-section">
      <h2>${heading}</h2>
      <div class="media-grid">${items.map(imageCard).join("")}</div>
    </section>` : "";

  const about = project.about ? `
    <section class="media-section project-about">
      <h2>${project.about.heading || `About ${project.title}`}</h2>
      ${project.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <h3>${project.about.listHeading || "Key features"}</h3>
      <ul>${project.about.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
    </section>` : "";

  const mainImage = project.mainImage ? `
    <section class="media-section">
      <h2>Main project image</h2>
      <div class="project-gallery">
        <figure class="gallery-item">
          <button class="image-open" type="button" aria-label="Open main project image">
            <img src="${project.mainImage}" alt="${project.title}" onerror="this.closest('.gallery-item').classList.add('missing-image')" />
            <span class="image-zoom-hint">Click to enlarge</span>
          </button>
        </figure>
      </div>
    </section>` : "";

  const demoVideo = project.demoVideo ? `
    <section class="media-section">
      <h2>Demo video</h2>
      <div class="project-gallery">
        <figure class="gallery-item featured-video">
          <video controls preload="metadata" playsinline>
            <source src="${project.demoVideo}" type="video/mp4" />
            Your browser does not support video.
          </video>
          <figcaption>Project demonstration</figcaption>
        </figure>
      </div>
    </section>` : "";

  content.innerHTML = `
    <a class="back" href="index.html#projects">← All projects</a>
    <h1>${project.title}</h1>
    <p class="project-description">${project.description}</p>
    <a class="github-link" href="${project.github}" target="_blank" rel="noreferrer">View Code Space →</a>
    ${mainImage}
    ${demoVideo}
    ${renderImageSection("Environment photos", project.environmentPhotos)}
    ${renderImageSection("Hardware & components", project.components)}
    ${about}
  `;

  // Click an image to view it in an overlay. Click outside or press Escape to close.
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt="" />';
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightboxImage.removeAttribute("src");
  };

  content.querySelectorAll(".image-open").forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      if (!img || !img.complete || img.naturalWidth === 0) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}
