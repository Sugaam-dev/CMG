import React from "react";

import {
  ChevronRight,
  CheckCircle2,
  BarChart3,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

export default function CollegeUniversityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            For Colleges & Universities
          </h1>
          <p className="mb-6 text-lg text-gray-600 sm:text-xl">
            Systems for Accreditation, Intelligence, and Career Outcomes
          </p>
        </div>
      </section>

      {/* Core Message Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Section title with divider lines */}
          <div className="my-6 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-gray-400" />
            <h2 className="text-lg font-medium tracking-widest text-gray-800">
              SYSTEMS, NOT SERVICES
            </h2>
            <div className="h-px w-24 bg-gray-400" />
          </div>

          {/* Subtitle */}
          <p className="mt-2 text-base text-gray-600 sm:text-lg">
            From enrollment to employment, powered by decision intelligence.
          </p>
        </div>
      </section>

      {/* Student Intelligence Systems Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl">
            STUDENT INTELLIGENCE SYSTEMS
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* CMG System Card */}
            <div className="flex flex-col justify-center">
              <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 sm:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">
                    CMG STUDENT INTELLIGENCE SYSTEM
                  </h3>
                  <span className="text-xl text-gray-400">•••</span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    {/* Mock Chart */}
                    <div className="flex-1">
                      <div className="aspect-square rounded border border-gray-300 bg-white p-4">
                        <div className="flex h-full items-end justify-between gap-1">
                          <div className="h-1/3 w-1 bg-gray-300"></div>
                          <div className="h-1/2 w-1 bg-gray-400"></div>
                          <div className="h-2/3 w-1 bg-gray-400"></div>
                          <div className="h-3/4 w-1 bg-gray-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 space-y-2 text-sm">
                      <p className="text-gray-700">• Aptitude Signal</p>
                      <p className="text-gray-700">• Placement Readiness</p>
                      <p className="text-gray-700">
                        • Mental & Academic Stability
                      </p>
                      <p className="text-gray-700">• Low-Visibility Students</p>
                      <p className="text-gray-700">• Real-Time Reports</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 pt-3">
                    <p className="text-xs text-gray-500">
                      Boards: JEE NEET CUET
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  One-touch insights into student decision readiness
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Low-visibility alerts for differentiated mentoring
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Data signals on placement and employment probabilities
                </p>
              </div>

              <button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded">
                Explore Student Systems{" "}
                <ChevronRight className="ml-2 h-4 w-4 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TATTVA Campus Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl">
            TATTVA CAMPUS
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Illustration Placeholder */}
            <div className="flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-8">
              <div className="text-center text-gray-400">
                <TrendingUp className="mx-auto mb-4 h-16 w-16" />
                <p className="text-sm">Campus Lifecycle Platform</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  End-to-end student lifecycle platform
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Accreditation readiness and governance dashboards
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Career intelligence linked to enrollment and placement rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K2C and Accreditation Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* K2C Column */}
            <div className="rounded-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
                KNOWLEDGE TO CAREERS (K2C)
              </h3>

              {/* K2C Flow */}
              <div className="mb-6 flex items-center justify-center gap-4 text-center">
                <div className="text-gray-700">
                  <div className="mb-2 text-2xl">🏫</div>
                  <p className="text-sm font-semibold">Schools</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-gray-700">
                  <div className="mb-2 text-2xl">🎓</div>
                  <p className="text-sm font-semibold">Colleges</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-gray-700">
                  <div className="mb-2 text-2xl">👥</div>
                  <p className="text-sm font-semibold">Careers</p>
                </div>
              </div>

              {/* K2C Benefits */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Integrated academic & career ecosystem from K-12 to
                    University to Careers
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Continuity of intelligence across critical transitions
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditation Column */}
            <div className="rounded-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
                ACCREDITATION & GOVERNANCE
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Accreditation Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 text-center">
                  <ClipboardCheck className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Accreditation Readiness
                  </h4>
                  <p className="text-xs text-gray-600">
                    Ensuring compliance and institutional quality
                  </p>
                </div>

                {/* Governance Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 text-center">
                  <BarChart3 className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Governance Dashboards
                  </h4>
                  <p className="text-xs text-gray-600">
                    Management visibility on outcomes & analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Own Outcomes. Not Fight Fires.
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Institutions that drive intelligence across enrollment, learning,
            and careers lead the future.
          </p>
        </div>
      </section>

      

      {/* K2C and Accreditation Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* K2C Column */}
            <div className="rounded-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
                KNOWLEDGE TO CAREERS (K2C)
              </h3>

              {/* K2C Flow */}
              <div className="mb-6 flex items-center justify-center gap-4 text-center">
                <div className="text-gray-700">
                  <div className="mb-2 text-2xl">🏫</div>
                  <p className="text-sm font-semibold">Schools</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-gray-700">
                  <div className="mb-2 text-2xl">🎓</div>
                  <p className="text-sm font-semibold">Colleges</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-gray-700">
                  <div className="mb-2 text-2xl">👥</div>
                  <p className="text-sm font-semibold">Careers</p>
                </div>
              </div>

              {/* K2C Benefits */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Integrated academic & career ecosystem from K-12 to
                    University to Careers
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Continuity of intelligence across critical transitions
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditation Column */}
            <div className="rounded-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
                ACCREDITATION & GOVERNANCE
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Accreditation Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 text-center">
                  <ClipboardCheck className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Accreditation Readiness
                  </h4>
                  <p className="text-xs text-gray-600">
                    Ensuring compliance and institutional quality
                  </p>
                </div>

                {/* Governance Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 text-center">
                  <BarChart3 className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Governance Dashboards
                  </h4>
                  <p className="text-xs text-gray-600">
                    Management visibility on outcomes & analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
