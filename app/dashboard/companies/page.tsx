export default function MyCompaniesPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            My Companies
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
            Manage your global business entities, track compliance status, and
            handle renewals.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-sky-500 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 transition-all active:scale-95 shrink-0 text-base">
          <span className="material-symbols-outlined text-[24px]">add</span>
          <span>Register New Company</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
              Total Entities
            </span>
            <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">
              domain
            </span>
          </div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            12
          </span>
          <span className="text-sm text-green-600 flex items-center gap-1 mt-1 font-medium">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>{" "}
            +2 this month
          </span>
        </div>
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
              Pending Actions
            </span>
            <span className="material-symbols-outlined text-amber-500 bg-amber-500/10 p-2 rounded-full">
              pending_actions
            </span>
          </div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            1
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Requires immediate attention
          </span>
        </div>
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
              Upcoming Renewals
            </span>
            <span className="material-symbols-outlined text-purple-500 bg-purple-500/10 p-2 rounded-full">
              calendar_month
            </span>
          </div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            3
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Within next 30 days
          </span>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card-light dark:bg-card-dark p-2 rounded-full border border-gray-200 dark:border-gray-700">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto p-1 no-scrollbar">
          <button className="px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold shadow-md whitespace-nowrap">
            All Companies
          </button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors whitespace-nowrap">
            Active (9)
          </button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors whitespace-nowrap">
            Pending (2)
          </button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors whitespace-nowrap">
            Archived (1)
          </button>
        </div>
        <div className="flex items-center gap-2 pr-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ml-auto">
            <span className="material-symbols-outlined text-lg">
              filter_list
            </span>
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-lg">sort</span>
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Active */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary border border-blue-100 dark:border-blue-800">
                <span className="material-symbols-outlined">apartment</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">
                  Atlas Tech SG
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  ID: 202309115H
                </p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Country
                </span>
                <div className="flex items-center gap-2">
                  <img
                    alt="Singapore Flag"
                    className="w-5 h-auto rounded-sm shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDxTlCXLi3H-ttemtyMfETEtdMElfIwX4PfHn18B9NUPJROT1d0cfLsndeiOG7pNucbVYhB8admeYQFD_8TnnyIlTSPknz0aQY9FAtZ2A5mzIcDDJzllgs9yOhUdRoRG14e5b3DgfRZjjXsMfoaSFB4BkPh_2QmRL8N4CkzZftRCHbcyVkKoEzRAF3bDvW6BhfnQRCXJzX3J8YGQXfq66A9vwQRYLCjXXLdlewHIVK64p-mcC1ShiXIVSIWMUmtMdAOVf7JFk5UJv_"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Singapore
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Status
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                    Active
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Next Renewal
                </span>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-lg text-gray-400">
                    calendar_today
                  </span>
                  <span className="text-sm font-medium">Oct 24, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full py-3 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-base font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center gap-2">
              Manage Company
            </button>
          </div>
        </div>

        {/* Card 2: Action Required */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 border border-purple-100 dark:border-purple-800">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">
                  Nomad Ventures LLC
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  ID: 882910-DE
                </p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Country
                </span>
                <div className="flex items-center gap-2">
                  <img
                    alt="USA Flag"
                    className="w-5 h-auto rounded-sm shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0SOVJPvpxe4aURmGjQtKJZHSnlGbgsIQt9q8Rv816295zEFt52tQP92gW0UGxu-CCMFZDuQrvFwhJ5M5c1t9yu5zd9l_y2raiesJBJ1QkB1y92UzIUUXf6a2M3HPqDVQ7dMRHJgAwuTjnepW7GPrCdOqu0NxZS_A1x9Ggi_LUR6-zyTVX4P2ujLT_Lldw7XA_WqK-lNASD6Fagp6qVO9JtGri0D3o59_cVWudi7tlxrZ-57JcCnk8FTQSKRqpy2fiOnYJPsZloLd5"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    USA (Delaware)
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Status
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>{" "}
                    Action Required
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Next Renewal
                </span>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <span className="material-symbols-outlined text-lg">
                    warning
                  </span>
                  <span className="text-sm font-bold">Due in 5 days</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full py-3 rounded-full border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400 text-base font-bold hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors flex items-center justify-center gap-2">
              Resolve Issues
            </button>
          </div>
        </div>

        {/* Card 3: Pending */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 border border-orange-100 dark:border-orange-800">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">
                  Pixel Design Ltd
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  ID: Pending
                </p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Country
                </span>
                <div className="flex items-center gap-2">
                  <img
                    alt="UK Flag"
                    className="w-5 h-auto rounded-sm shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQo41cakMDOSxk_TXEm2NgF8zFsKvCnZe1DX4rQ3kHf2iDoPp2CXsryDtrZI2APj00gNivvdFUhJulxO9Qu0ee4XaVOmeBtrZKzVUF-xraN9NxCmlnMZS-SrwYWT8-5C2KQY1e_vj4SpTzY_H8TCFPsMDiTy1zq7kjC38mnOBxp0KcGtVMtsRnQ3bfvE2Od5ZjSI0n9O-XR30Lw4viq2Xf9-sLlzfXON-7sQ5sbKJ6VJRLmbicd01d4wc3LF3eKF7rmJ_R16Klp5yk"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    United Kingdom
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Status
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <span className="material-symbols-outlined text-[14px] animate-spin">
                      progress_activity
                    </span>{" "}
                    Processing
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Est. Completion
                </span>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-lg text-gray-400">
                    schedule
                  </span>
                  <span className="text-sm font-medium">Nov 02, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full py-3 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-base font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center gap-2">
              View Application
            </button>
          </div>
        </div>

        {/* Card 4: Active */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 border border-teal-100 dark:border-teal-800">
                <span className="material-symbols-outlined">business</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">
                  Green Energy GmbH
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  ID: HRB 29101
                </p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Country
                </span>
                <div className="flex items-center gap-2">
                  <img
                    alt="Germany Flag"
                    className="w-5 h-auto rounded-sm shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBynLlfyFLg7DmDxH5VBck-65mjyVZfOXRTciN947zh0xReLgjNSWwPzke8L5NVRnyvMNjwm_4w8zITeLV0oI18PopNx_ctmj8QLnb-JbPqyJeUwi4_jJo0oHEzzwAbD0HBL6ANWmdxTG8OOxwpt7MSud5_G8tPlwOX7Nng7QzCh9zcbraOK2phAD_zvhJkV6ZdjZtG1X1XDdeB2An6MrVgigHFkC-imFggjCdoQO8whqYVUfE0hvoW6rW3ycAbK9wyezQNB4N4sNOw"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Germany
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Status
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                    Active
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Next Renewal
                </span>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-lg text-gray-400">
                    calendar_today
                  </span>
                  <span className="text-sm font-medium">Dec 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full py-2.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center gap-2">
              Manage Company
            </button>
          </div>
        </div>

        {/* Card 5: Active */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-600 border border-rose-100 dark:border-rose-800">
                <span className="material-symbols-outlined">store</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">
                  Tokyo Digital KK
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  ID: 5543-991
                </p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Country
                </span>
                <div className="flex items-center gap-2">
                  <img
                    alt="Japan Flag"
                    className="w-5 h-auto rounded-sm shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0OtnVfk9X3AqS9w-3JkoKkY029IuFmuvQK6tp8zH18I3qGxg3VZXDhyZKujYEORItJO1vuymmhKlFFLsPghhPagLnfsBRdn1se_IdmPedbFvjf_y0FVPV4rwNKbUfONHeQ3QHhBoHvJcF4yyo1UePkrvdkZHjHvGTI7yyL5isNRG2fyToENIOz-tEjCamsD08E5kuSqVcXhByPcGDvU1lCT_6Gu00sEY8GA-7B-ZIjFTY934NkGa41it4VcXm-SKFA4PdfvbF6Ovd"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Japan
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Status
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                    Active
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Next Renewal
                </span>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-lg text-gray-400">
                    calendar_today
                  </span>
                  <span className="text-sm font-medium">Mar 30, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="w-full py-2.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center gap-2">
              Manage Company
            </button>
          </div>
        </div>

        {/* Card 6: Add New Placeholder */}
        <div className="bg-background-light dark:bg-background-dark rounded-2xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors group flex flex-col h-full items-center justify-center min-h-[300px] cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors mb-4">
            <span className="material-symbols-outlined text-3xl">add</span>
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">
            Register New Entity
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 max-w-[200px]">
            Expand your global footprint by registering a new company.
          </p>
        </div>
      </div>
    </div>
  );
}
