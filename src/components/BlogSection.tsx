import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost } from '../types';
import { 
  Newspaper, 
  Clock, 
  User, 
  ArrowLeft, 
  X, 
  Tag, 
  BookOpen 
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = [
    { id: 'all', label: 'كافة المقالات' },
    { id: 'أخبار التجارة الدولية', label: 'أخبار التجارة الدولية' },
    { id: 'اللوائح الجمركية', label: 'اللوائح الجمركية' },
    { id: 'التسويق الزراعي', label: 'التسويق الزراعي' },
    { id: 'النقل البحري', label: 'النقل البحري والجوي' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'النقل البحري') {
      return post.category === 'النقل البحري' || post.category === 'الشحن الجوي';
    }
    return post.category === selectedCategory;
  });

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#FAF9F6]/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Newspaper className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">06. المقالات واللوائح</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
            آخر الأخبار والتحليلات الجمركية والتجارية
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            مواضيع متجددة تهم التجار والمستوردين والمزارعين في مجالات النقل والتخليص الجمركي والسوق السعودي.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start md:justify-center -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`blog-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0A1D37] text-[#C5A059] border border-[#C5A059]/50 shadow-md'
                  : 'bg-white text-slate-700 hover:text-[#0A1D37] border border-[#CBD5E1] hover:border-[#C5A059]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-[#CBD5E1] hover:border-[#C5A059] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl text-right shadow-md"
            >
              {/* Top Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-[#0A1D37]/30 to-transparent"></div>
                
                <div className="absolute top-3 right-3 bg-[#0A1D37]/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-extrabold text-[#C5A059] border border-[#C5A059]/50 shadow-md">
                  {post.category}
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-3 text-[11px] text-slate-100 font-extrabold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#0A1D37] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed line-clamp-3 font-bold">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E2D9] flex items-center justify-between">
                  <span className="text-[11px] text-[#0A1D37] font-semibold flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    {post.author}
                  </span>

                  <button
                    id={`blog-read-${post.id}`}
                    onClick={() => setActivePost(post)}
                    className="text-[#C5A059] hover:text-[#0A1D37] text-xs font-bold flex items-center gap-1"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-[#0A1D37]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white border border-[#E5E2D9] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-right max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 left-4 p-2 text-[#64748B] hover:text-[#0A1D37] bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pt-2">
              <span className="text-xs bg-[#0A1D37] text-[#C5A059] font-bold px-3 py-1 rounded-full border border-[#C5A059]/30 mono inline-block">
                {activePost.category}
              </span>
              <h3 className="text-2xl font-black text-[#0A1D37] leading-tight">{activePost.title}</h3>
              <div className="flex items-center gap-4 text-xs text-[#64748B] font-semibold">
                <span>{activePost.author}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>

            <div className="h-56 rounded-2xl overflow-hidden border border-[#E5E2D9]">
              <img src={activePost.imageUrl} alt={activePost.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              {activePost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E2D9] flex flex-wrap gap-2">
              <span className="text-xs font-bold text-[#0A1D37] flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
                الوسوم:
              </span>
              {activePost.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-[#FAF9F6] text-[#0A1D37] text-[11px] px-2.5 py-1 rounded-md border border-[#E5E2D9] font-bold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
