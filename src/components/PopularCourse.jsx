import React from 'react'

export default function PopularCourse() {
  return (
    <>
      <h2 className="text-[#0d151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Popular Courses
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-4">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnR5Ve5lEzB_hF2_IG8_kqrY-fJ_UoinLwtBIISTa3Gt31fMrtrIvqoP5YESZKpmAnX7of_hPAaG5OfHPIqQLxV-nVoLyAPQDq2TocwRMQVM6oKrZ4EMngM2pH88vbRmRiib2pqWpNrYSCkteBh2lE2t7DewWJYDoqC9uOBzbaNVVig5BID3oVynDIg5MV9QJcKLagsCWSIXgrn2BwiIHS-1a-1Tl993ViSqi8wu_W6IFyg_zN9TrD7nPrV_RpA5ZWFL7kmRQDGiaB")',
              }}
            ></div>
            <div>
              <p className="text-[#0d151b] text-base font-medium leading-normal">
                Business Analytics
              </p>
              <p className="text-[#4c759a] text-sm font-normal leading-normal">
                Master data analysis and visualization techniques.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXdSSVJTvP5Y_waL-ziNweZur2ivT5XfWbi_Gu0lZ6kYortB3S-iA0E45bxh8MDoV5qOAkTg9JKCQ9dlpvj49VzYCKmDuksyCbrYJ807d9pRbyhibFj_P_-QPl6S_UqkE71InEXURAPKG6iy7ZzEm-Khm7UoEFZnEI6U3-rGCp2f7-ZPMFKsaNxKvMooFM4zcZiar1rNoTZjSQ-0-bM4_muvBhJf3OhrZSebNLtNsowWeR_dOL7mbezguCh5QdWNVjwDVAw_4j7Uib")',
              }}
            ></div>
            <div>
              <p className="text-[#0d151b] text-base font-medium leading-normal">
                Project Management
              </p>
              <p className="text-[#4c759a] text-sm font-normal leading-normal">
                Learn agile methodologies and lead successful projects.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBctz1NFxAO-RUVwynI93QNQiOrggyTmv3rbFVX0D5W2N0HwPXQ1V2wZ5ta6zBGViNzFm3bQnU1VFo9jcw3VgMI9-33XB266dSMqfVfabX5Uzycy-QVt1C5xYROc-OWLf6HrHJ_-Wf78h_r9fVF6n6u-mhICaF-YTRG_1z6GOy3hdOWrQeaHWAgwu3gxnVYA3LEXWCJwGEO3mG-IjMoFkFRiKAD5DG0x4JH6SSTjdGOJ2szQaJmbYewmzDLRmm9OL96IA6GEnNMbqN5")',
              }}
            ></div>
            <div>
              <p className="text-[#0d151b] text-base font-medium leading-normal">
                Web Development
              </p>
              <p className="text-[#4c759a] text-sm font-normal leading-normal">
                Build responsive websites with HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
