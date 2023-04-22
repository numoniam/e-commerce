import React, { useRef, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Image } from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            Line.current.classList.add('lineon')
            text.current.classList.add('titleon');
        }, 5)


        return () => {

        }
    }, [])
    return (



        <>
            <Helmet>
                <title>About</title>
            </Helmet>


            <div className='headingA'>
                <div className='line' ref={Line}>
                </div>
                <h1 className='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className='text'>
                    <h1>
                        Why?
                    </h1>
                    <p>An "Why Us" description is an essential part of an e-commerce website that explains to customers why they should choose your brand over competitors. It helps to establish trust and credibility with potential customers and can ultimately lead to increased sales and customer loyalty.

                        When crafting a "Why Us" description, it's important to highlight your unique selling points, such as your high-quality products, exceptional customer service, fast and reliable shipping, competitive pricing, and any other features that differentiate your brand from others in the market.

                        Additionally, you can also include any awards, certifications, or industry recognitions that your brand has received to further establish your credibility and expertise in your field.

                        Overall, your "Why Us" description should be persuasive and informative, giving customers a clear understanding of what makes your brand special and why they should choose to do business with you.
                        An e-commerce website is an online platform that allows businesses to sell their products or services to customers over the internet. It provides a virtual storefront where customers can browse and purchase products, make payments, and track their orders. E-commerce websites can range from small businesses selling a few products, to large retailers with extensive product catalogs and millions of customers.

                        E-commerce websites typically feature a user-friendly interface that makes it easy for customers to find and purchase products. They often include search and filtering tools to help customers narrow down their options, as well as product descriptions, reviews, and images to provide more information about the items for sale.

                    </p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
            </div>
            <div className='Content2'>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
                <div className='text'>
                    <h1>
                        How?
                    </h1>
                    <p>To access the full description of an e-commerce website, follow these steps:

                        Go to the website: Open your web browser and navigate to the e-commerce website you want to access.

                        Find the product page: Look for the product you want to know more about and click on the product name or image to go to its product page.

                        Scroll down: On the product page, scroll down until you see the product description section. This section usually provides detailed information about the product, including its features, specifications, materials, dimensions, care instructions, and other relevant details.

                        Read the full description: To access the full description, click on the "Read more" or "See more" link if available. This will expand the product description and show you additional information.

                        Check for reviews: You may also want to check for customer reviews, which can provide valuable insights into the product's quality, performance, and usability. Look for a section labeled "Reviews" or "Customer feedback" on the product page.

                        If you have trouble finding the product description or have additional questions about the website, you can also contact the website's customer service or support team for assistance.</p>
                </div>
            </div>
        </>

    )
}

export default About
