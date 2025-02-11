const SectionFooter = () => {
  return (
    <footer className="footer footer-center bg-primary text-accent p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Artifact Vault
        </p>
      </aside>
    </footer>
  );
};

export default SectionFooter;
