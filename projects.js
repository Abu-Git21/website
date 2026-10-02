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
      { src: "Room.jpeg", label: "Bedroom setup" },
      { src: "Room Close.jpeg", label: "Bedroom close-up" },
      { src: "Out.jpeg", label: "Outdoor setup" },
      { src: "Out Close.jpeg", label: "Outdoor close-up" },
      { src: "Garage.jpeg", label: "Garage setup" },
      { src: "Garage Close.jpeg", label: "Garage close-up" }
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
        "The system uses an SCD30 sensor to monitor CO₂ concentration, temperature, and humidity, while an LDR measures ambient light levels. Two ultrasonic sensors provide proximity and distance detection.",
        "Sensor data is processed by the ESP32 and presented through a 2.8-inch TFT display, with a joystick providing menu navigation and user control.",
        "The project also incorporates LED and buzzer alerts for abnormal environmental conditions or detected proximity events. The ESP32’s built-in Wi-Fi and Bluetooth capabilities are designed to provide wireless monitoring, configuration, and control. An ESP32-CAM is planned as a camera subsystem for capturing images when specific events are detected."
      ],
      features: [
        "CO₂, temperature, and humidity monitoring",
        "Ambient light detection",
        "Dual ultrasonic proximity detection",
        "TFT-based graphical interface",
        "Joystick-controlled menus",
        "LED and buzzer alerts",
        "Wi-Fi-based monitoring dashboard",
        "Bluetooth-based configuration and control",
        "ESP32-CAM event capture",
        "Environmental status and alert processing"
      ]
    }
  },

  "alarm-clock": {
    title: "Digital Alarm Clock PCBA",
    description: "A working digital alarm clock I built and programmed using an ATmega4809 microcontroller, with a 7-segment display, push-button controls, and alarm functionality.",
    github: "https://github.com/Abu-Git21/Digital-Alarm-Clock-PCBA/tree/main",
    mainImage: "assets/F6B79EF6-6F11-41CA-B233-B9F190F5453A.PNG",
    schematic: "assets/SKIMATIC.png",
    environmentPhotos: [],
    components: [
      { src: "assets/alarm-clock-pcb.jpg", label: "Clock PCB" },
      { src: "assets/alarm-clock-assembly.jpg", label: "Assembled clock hardware" },
      { src: "assets/alarm-clock-display.jpg", label: "Clock display close-up" }
    ],
    about: {
      heading: "About the clock",
      listHeading: "Skills",
      paragraphs: [
    "I built and programmed a digital alarm clock around an ATmega4809 microcontroller. The finished system uses a 7-segment display to show the time and push buttons to control the clock and alarm settings.",

    "I assembled and soldered the electronic components on the clock's PCB, including the ATmega4809 microcontroller, resistors, capacitors, LEDs, diodes, transistors, push buttons, a buzzer, a 7-segment display, a USB connector, and pin headers. The resistors and capacitors support the circuit's electrical operation, while the LEDs provide visual indicators. The buttons let the user interact with the clock, and the buzzer provides the alarm sound.",

    "I then wrote the embedded code that controls the display, reads button inputs, keeps track of time, and activates the alarm. I tested the hardware and software together to check that the components worked as part of one system.",

    "The circuit schematic shown on this page was provided as part of the course lab materials. I used it as a reference while assembling and testing the clock. I did not design the schematic myself.",

    "This project gave me hands-on experience with PCB assembly, soldering, embedded programming, circuit troubleshooting, and integrating hardware with software."
      ],
      features: [
    "ATmega4809 microcontroller",
    "Resistors",
    "Capacitors",
    "LEDs",
    "Diodes",
    "Transistors",
    "Push buttons",
    "Buzzer",
    "7-segment display",
    "USB connector",
    "Pin headers",
    "Embedded C",
    "PCB assembly and soldering",
    "Hardware debugging"
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

  const schematic = project.schematic ? `
    <section class="media-section">
      <h2>Circuit schematic</h2>
      <div class="project-gallery">
        <figure class="gallery-item">
          <button class="image-open" type="button" aria-label="Open circuit schematic">
            <img src="${project.schematic}" alt="${project.title} circuit schematic" onerror="this.closest('.gallery-item').classList.add('missing-image')" />
            <span class="image-zoom-hint">Click to enlarge</span>
          </button>
          <figcaption>This schematic was provided as part of the course lab materials. I used it as a reference while assembling and testing the clock; I did not design the schematic myself. Click to enlarge and inspect the circuit connections.</figcaption>
        </figure>
      </div>
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
    ${schematic}
    ${renderImageSection("Environment photos", project.environmentPhotos)}
    ${renderImageSection(project.schematic ? "Additional hardware photos" : "Hardware & components", project.components)}
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
