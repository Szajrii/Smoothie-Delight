<template>
  <section id="blog" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <BookOpen class="w-3.5 h-3.5" />
            Wiedza & Przepisy
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Poradnik <span class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">zdrowego odżywiania</span>
          </h2>
        </div>
        <p class="text-slate-500 text-sm sm:text-base max-w-md">
          Artykuły przygotowywane we współpracy z dietetykami klinicznymi, trenerami i pasjonatami fitoterapii.
        </p>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in blogPosts"
          :key="post.id"
          class="group rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Image & Tag -->
            <div class="relative h-56 overflow-hidden bg-slate-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                  {{ post.category }}
                </span>
              </div>
            </div>

            <!-- Content Excerpt -->
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-3 text-xs text-slate-400">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>

              <h3 class="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition font-display leading-snug">
                {{ post.title }}
              </h3>

              <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <!-- Card Footer: Author & Read CTA -->
          <div class="p-6 pt-0 border-t border-slate-200/60 mt-4 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <img
                :src="post.author.avatar"
                :alt="post.author.name"
                class="w-8 h-8 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div class="text-xs font-bold text-slate-800">{{ post.author.name }}</div>
                <div class="text-[10px] text-slate-400">{{ post.author.role }}</div>
              </div>
            </div>

            <button
              @click="activePost = post"
              class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
            >
              Czytaj
              <ArrowUpRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Article Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="activePost"
        class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        @click.self="activePost = null"
      >
        <div class="bg-white max-w-2xl w-full rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
          <!-- Modal Header Image -->
          <div class="relative h-60 shrink-0">
            <img :src="activePost.image" :alt="activePost.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <button
              @click="activePost = null"
              class="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition cursor-pointer"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="absolute bottom-4 left-6 right-6 text-white">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white">
                {{ activePost.category }}
              </span>
              <h3 class="text-xl sm:text-2xl font-black font-display mt-2 leading-tight">
                {{ activePost.title }}
              </h3>
            </div>
          </div>

          <!-- Modal Scrollable Content -->
          <div class="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
            <div class="flex items-center gap-3 pb-4 border-b border-slate-100">
              <img :src="activePost.author.avatar" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <div class="text-sm font-bold text-slate-900">{{ activePost.author.name }}</div>
                <div class="text-xs text-slate-400">{{ activePost.author.role }} • {{ activePost.date }}</div>
              </div>
            </div>

            <div class="whitespace-pre-line space-y-4">
              {{ activePost.content }}
            </div>

            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <span
                v-for="tag in activePost.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BookOpen, ArrowUpRight, X } from 'lucide-vue-next'
import { blogPosts } from '../data/blog'
import type { BlogPost } from '../types'

const activePost = ref<BlogPost | null>(null)
</script>
