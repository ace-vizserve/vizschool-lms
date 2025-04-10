import Footer from '@/components/Footer'
import PageMetaData from '@/components/PageMetaData'
import { getBlogById } from '@/helpers/data'
import { BlogType } from '@/types/other'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlogInfo from './components/BlogInfo'
import RelatedBlogs from './components/RelatedBlogs'
import TopNavigationBar from './components/TopNavigationBar'

const BlogDetails = () => {
  const [blog, setBlog] = useState<BlogType>()
  const { blogId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      if (blogId) {
        const data = await getBlogById(blogId)
        if (data) setBlog(data)
        else navigate('/error-404')
      }
    })()
  }, [blogId, navigate])
  return (
    <>
      <PageMetaData title={blog?.id ?? 'Blog Details'} />
      <TopNavigationBar />
      <main>
        {blog && <BlogInfo blog={blog} />}
        <RelatedBlogs />
      </main>
      <Footer />
    </>
  )
}
export default BlogDetails
