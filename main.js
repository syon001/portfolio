async function fetchProjects() {
    try {
      const response = await fetch('data.json');
      const projects = await response.json();
      
      const container = document.getElementById('projectContainer');

      projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'section';

        projectDiv.innerHTML = `
          <a href="${project.livelink}" target="_blank">
            <h2>
              ${project.title}
              <i class="fa-solid fa-up-right-from-square"></i>
            </h2>
          </a>
          <p>${project.description}</p>
          <div class="bottom">
            <div class="tags">
              ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <span class="gitcode">
              <a href="${project.githubLink}" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        `;

        container.appendChild(projectDiv);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
fetchProjects();