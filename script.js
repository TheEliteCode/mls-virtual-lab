function launchModule(moduleName) {
  const modal = document.getElementById("labModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const media = document.querySelector(".modal-media");

  switch (moduleName) {
    case 'hematology':
      title.innerText = "🧬 Hematology Simulation";
      description.innerText = "Practice running a Full Blood Count (FBC), and analyzing results from blood smears.";
      media.innerHTML = `
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/SAMPLE1" title="Hematology Tutorial" frameborder="0" allowfullscreen></iframe>
        <p><a href="https://example.com/hematology_guide.pdf" target="_blank">📄 View Lab Procedure (PDF)</a></p>
      `;
      break;

    case 'microscopy':
      title.innerText = "🔬 Microscopy Lab";
      description.innerText = "Explore how to identify parasites and red/white blood cells using microscopy.";
      media.innerHTML = `
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/SAMPLE2" title="Microscopy Training" frameborder="0" allowfullscreen></iframe>
        <p><a href="https://example.com/microscopy_manual.pdf" target="_blank">📄 Download Manual</a></p>
      `;
      break;

    case 'chemistry':
      title.innerText = "🧪 Clinical Chemistry";
      description.innerText = "Understand how to use a clinical chemistry analyzer to test glucose, urea and more.";
      media.innerHTML = `
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/SAMPLE3" title="Clinical Chemistry Walkthrough" frameborder="0" allowfullscreen></iframe>
        <p><a href="https://example.com/clinical_chemistry_lab.pdf" target="_blank">📄 Chemistry Lab Sheet</a></p>
      `;
      break;

    case 'microbiology':
      title.innerText = "🧫 Microbiology Virtual Lab";
      description.innerText = "Learn how to prepare culture media, inoculate samples, and interpret antibiograms.";
      media.innerHTML = `
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/SAMPLE4" title="Microbiology Lab Demo" frameborder="0" allowfullscreen></iframe>
        <p><a href="https://example.com/microbiology_worksheet.pdf" target="_blank">📄 Antibiogram Reference</a></p>
      `;
      break;

    default:
      title.innerText = "Unknown Module";
      description.innerText = "Module data not available.";
      media.innerHTML = "";
  }

  modal.style.display = "block";
}

function runSimulation() {
  const color = document.getElementById("color").value;
  const ph = parseFloat(document.getElementById("ph").value);
  const glucose = document.getElementById("glucose").value;
  const resultDiv = document.getElementById("result");

  let result = "<h3>Test Result:</h3>";

  if (!ph || ph < 4 || ph > 9) {
    resultDiv.innerHTML = "<p style='color:red;'>Invalid pH value. Must be between 4 and 9.</p>";
    return;
  }

  if (color === "dark" && glucose === "high") {
    result += "<p>Possible sign of diabetes. Recommend further testing.</p>";
  } else if (glucose === "trace") {
    result += "<p>Monitor glucose levels closely. Slight elevation detected.</p>";
  } else if (ph < 5.5) {
    result += "<p>Acidic urine detected. May indicate dehydration or high-protein diet.</p>";
  } else {
    result += "<p>No abnormalities detected.</p>";
  }

  resultDiv.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("simulation-modal");
  const modalTitle = document.getElementById("sim-title");
  const closeBtn = document.querySelector(".close-btn");
  const launchButtons = document.querySelectorAll(".launch-btn");

  launchButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const title = this.parentElement.querySelector("h2").innerText;
      modalTitle.innerText = title;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
