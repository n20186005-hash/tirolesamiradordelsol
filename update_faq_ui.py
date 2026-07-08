import re

with open('src/components/LandingPage.astro', 'r', encoding='utf-8') as f:
    content = f.read()

old_faq_section = '''    <section class="border-t border-stone-200/70 bg-white/55">
      <div class="mx-auto max-w-7xl px-5 py-18 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">{content.nav.visit}</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{content.faq.title}</h2>
          <p class="mt-5 text-base leading-7 text-slate-600">{content.faq.intro}</p>
        </div>
        <div class="mt-10 grid gap-4">
          {
            content.faq.items.map((item) => (
              <details class="group rounded-[1.5rem] border border-stone-200/80 bg-white/90 p-6 shadow-sm shadow-stone-200/30">
                <summary class="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-slate-900">
                  <span>{item.question}</span>
                  <span class="mt-1 text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p class="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))
          }
        </div>
      </div>
    </section>'''

new_faq_section = '''    <section class="border-t border-stone-200/70 bg-white/55">
      <div class="mx-auto max-w-7xl px-5 py-18 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">{content.nav.visit}</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{content.faq.title}</h2>
          <p class="mt-5 text-base leading-7 text-slate-600">{content.faq.intro}</p>
        </div>
        <div class="mt-12 flex flex-col gap-12">
          {
            content.faq.groups.map((group) => (
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span class="w-1.5 h-6 bg-slate-800 rounded-full"></span>
                  {group.category}
                </h3>
                <div class="grid gap-4">
                  {group.items.map((item) => (
                    <details class="group rounded-[1.5rem] border border-stone-200/80 bg-white/90 p-6 shadow-sm shadow-stone-200/30">
                      <summary class="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-slate-900">
                        <span>{item.question}</span>
                        <span class="mt-1 text-slate-400 transition group-open:rotate-45">+</span>
                      </summary>
                      <p class="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>'''

content = content.replace(old_faq_section, new_faq_section)

with open('src/components/LandingPage.astro', 'w', encoding='utf-8') as f:
    f.write(content)
