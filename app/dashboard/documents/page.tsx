export default function DocumentsPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Documents
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
            Secure vault for all your official business documents and filings.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-gray-700 dark:text-gray-300 px-5 py-3 rounded-full font-bold transition-colors">
            <span className="material-symbols-outlined">upload</span>
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined">
          search
        </span>
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-gray-900 dark:text-white"
        />
      </div>

      {/* Folders Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Company Folders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 cursor-pointer transition-all group">
            <span className="material-symbols-outlined text-4xl text-blue-500 mb-3 group-hover:scale-110 transition-transform">
              folder
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Atlas Tech SG
            </h3>
            <p className="text-xs text-gray-500 mt-1">12 files</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 cursor-pointer transition-all group">
            <span className="material-symbols-outlined text-4xl text-purple-500 mb-3 group-hover:scale-110 transition-transform">
              folder
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Nomad Ventures
            </h3>
            <p className="text-xs text-gray-500 mt-1">4 files</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 cursor-pointer transition-all group">
            <span className="material-symbols-outlined text-4xl text-teal-500 mb-3 group-hover:scale-110 transition-transform">
              folder
            </span>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Green Energy
            </h3>
            <p className="text-xs text-gray-500 mt-1">8 files</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 cursor-pointer transition-all group border-dashed flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-2">
              create_new_folder
            </span>
            <h3 className="font-medium text-gray-500 dark:text-gray-400 text-sm">
              New Folder
            </h3>
          </div>
        </div>
      </div>

      {/* Recent Files Table */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Recent Documents
        </h2>
        <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <th className="p-4 pl-6">Name</th>
                <th className="p-4">Type</th>
                <th className="p-4">Date Added</th>
                <th className="p-4">Size</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 pl-6 flex items-center gap-3 font-medium text-gray-900 dark:text-white">
                  <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">
                      picture_as_pdf
                    </span>
                  </div>
                  Certificate_of_Incorporation.pdf
                </td>
                <td className="p-4 text-gray-500">Legal</td>
                <td className="p-4 text-gray-500">Oct 24, 2024</td>
                <td className="p-4 text-gray-500">1.2 MB</td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 pl-6 flex items-center gap-3 font-medium text-gray-900 dark:text-white">
                  <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">
                      description
                    </span>
                  </div>
                  Operating_Agreement_v2.docx
                </td>
                <td className="p-4 text-gray-500">Agreement</td>
                <td className="p-4 text-gray-500">Oct 22, 2024</td>
                <td className="p-4 text-gray-500">450 KB</td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="p-4 pl-6 flex items-center gap-3 font-medium text-gray-900 dark:text-white">
                  <div className="w-8 h-8 rounded bg-green-100 text-green-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">
                      image
                    </span>
                  </div>
                  EIN_Notice_IRS.png
                </td>
                <td className="p-4 text-gray-500">Tax</td>
                <td className="p-4 text-gray-500">Oct 20, 2024</td>
                <td className="p-4 text-gray-500">2.4 MB</td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
