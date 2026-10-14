const skillGroups = [
  {
    title: 'Безпека та мережі',
    skills: ['Wireshark і Cisco Packet Tracer', 'Kali Linux', 'Розуміння вебвразливостей SQLi та XSS', 'Стандарт ISO/IEC 27001'],
  },
  {
    title: 'Інфраструктура та операційні системи',
    skills: ['Адміністрування Linux', 'Docker і VirtualBox', 'Автоматизація Bash/Zsh'],
  },
  {
    title: 'Розробка та інструменти',
    skills: ['TypeScript, Node.js, Python, C#, React', 'MySQL і SQLite', 'VS Code/Cursor, Ollama, LM Studio, Obsidian'],
  },
  {
    title: 'Soft skills',
    skills: ['Організація роботи та комунікація', 'Траблшутинг', 'Досвід старости групи'],
  },
];

function Skills() {
  return (
    <section aria-labelledby="skills-title">
      <h2 id="skills-title">Навички</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
