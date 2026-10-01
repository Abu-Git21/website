// Add or edit your projects here. Put your photo/video files in an "assets" folder,
// then use paths such as "assets/my-photo.jpg" or "assets/demo.mp4".
const projects = {
  "environmental-monitor": {
    title: "EnviroMonitor",
    description: "An ESP32-based environmental monitoring and alert system that brings real-time sensing, embedded control, wireless communication, and user interaction together in one platform.",
    github: "https://github.com/Abu-Git21/EnviromentMonitor",
    mainImage: "assets/FINAL.png",
    media: [
      { type: "image", src: "assets/enviromonitor-circuit.jpeg", label: "Circuit photo" },
      { type: "image", src: "assets/enviromonitor-display.jpeg", label: "TFT display photo" },
      { type: "video", src: "assets/enviromonitor-demo.mp4", label: "Project demo video" }    ],
    video: "",
    about: {
      paragraphs: [
        "The system uses an SCD30 sensor to monitor CO₂ concentration, temperature, and humidity, while an LDR measures ambient light levels. Two ultrasonic sensors provide proximity and distance detection.",
        "Sensor data is processed by the ESP32 and presented through a 2.8-inch TFT display, with a joystick providing menu navigation and user control.",
        "The project also incorporates LED and buzzer alerts for abnormal environmental conditions or detected proximity events. The ESP32’s built-in Wi-Fi and Bluetooth capabilities are designed to provide wireless monitoring, configuration, and control. An ESP32-CAM is planned as a camera subsystem for capturing images when specific events are detected."
      ],
      features: ["CO₂, temperature, and humidity monitoring", "Ambient light detection", "Dual ultrasonic proximity detection", "TFT-based graphical interface", "Joystick-controlled menus", "LED and buzzer alerts", "Wi-Fi-based monitoring dashboard", "Bluetooth-based configuration and control", "ESP32-CAM event capture", "Environmental status and alert processing"]
    }
  },
  "alarm-clock": {
    title: "Digital Alarm Clock PCBA",
    description: "A working digital alarm clock I built and programmed using an ATmega4809 microcontroller, with a 7-segment display, push-button controls, and alarm functionality.",
    github: "https://github.com/Abu-Git21/Digital-Alarm-Clock-PCBA/tree/main",
    mainImage: "assets/alarm-clock.jpeg",
    media: [
      { type: "image", src: "assets/alarm-clock-pcb.jpg", label: "PCB photo" },
      { type: "image", src: "assets/alarm-clock-assembly.jpg", label: "Assembly photo" },
      { type: "image", src: "assets/alarm-clock-display.jpg", label: "Clock display photo" },
      { type: "video", src: "assets/alarm-clock-demo.mp4", label: "Project demo video" }
    ],
    video: "",
    about: {
      heading: "About the clock",
      listHeading: "Skills",
      paragraphs: [
        "I built and programmed a digital alarm clock around an ATmega4809 microcontroller. The finished system uses a 7-segment display to show the time and push buttons to control the clock and alarm settings.",
        "I connected and soldered the electronic components needed for the clock, including resistors, capacitors, LEDs, push buttons, transistors, and the display. I then wrote the embedded code that controls the display, reads button input, keeps track of time, and activates the alarm.",
        "This project gave me hands-on experience creating a complete hardware-and-software system. It strengthened my skills in embedded programming, troubleshooting circuits, debugging code, and making a physical device respond reliably to user input."
      ],
      features: ["ATmega4809", "Embedded C", "Microcontroller programming", "Soldering", "Digital electronics", "Hardware debugging", "Push-button controls", "7-segment displays"]
    }
  }
};

const id = new URLSearchParams(window.location.search).get("id");
const project = projects[id];
const content = document.querySelector("#project-content");

if (!project) {
  content.innerHTML = '<h1>Project not found</h1><p><a href="index.html">Back to projects</a></p>';
} else {
  document.title = `${project.title} — My Portfolio`;
  const mediaSlots = project.media.map((media) => media.type === "video" ? `
    <figure class="gallery-item media-video-slot">
      <video controls onerror="this.parentElement.classList.add('missing-video')"><source src="${media.src}" type="video/mp4" />Your browser does not support video.</video>
      <figcaption>Video slot: ${media.label}</figcaption>
    </figure>` : `
    <figure class="gallery-item media-image-slot">
      <img src="${media.src}" alt="${media.label}" onerror="this.parentElement.classList.add('missing-image')" />
      <figcaption>Image slot: ${media.label}</figcaption>
    </figure>`).join("");
  const about = project.about ? `
    <section class="media-section project-about">
      <h2>${project.about.heading || `About ${project.title}`}</h2>
      ${project.about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <h3>${project.about.listHeading || "Key features"}</h3>
      <ul>${project.about.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
    </section>` : "";
  content.innerHTML = `
    <a class="back" href="index.html#projects">← All projects</a>
    <h1>${project.title}</h1>
    <p class="project-description">${project.description}</p>
    <a class="github-link" href="${project.github}" target="_blank" rel="noreferrer">View Code Space →</a>
    <section class="media-section"><h2>Main project image</h2><div class="project-gallery"><figure class="gallery-item"><img src="${project.mainImage}" alt="${project.title}" /></figure></div></section>
    <section class="media-section"><h2>Images &amp; video</h2><p class="media-help">Replace these file names in <code>projects.js</code> after adding your photos and videos to the <code>assets</code> folder.</p><div class="media-grid">${mediaSlots}</div></section>
    ${about}
    `;
}
