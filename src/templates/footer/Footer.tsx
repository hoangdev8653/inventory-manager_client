function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h1 className="font-semibold text-base">
            Hệ thống Biên bản bàn giao
          </h1>
          <p className="text-sm">© 2025 Công ty XYZ. All rights reserved.</p>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>
            Email:{" "}
            <a
              href="mailto:support@congty.com"
              className="text-blue-400 hover:underline"
            >
              support@congty.com
            </a>
          </p>
          <p>Hotline: 0901 234 567</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
