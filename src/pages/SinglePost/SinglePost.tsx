import React from 'react'
import Wrapper from '../../component/Wrapper/Wrapper'
import Singleblog from '../../component/SinglePost/Singleblog'
import NewsLater from '../../component/NewsLater/NewsLater'
import Footer from '../../Constants/Footer'
import Navbar from '../../Constants/Navbar'

const SinglePost = () => {

    const singleblog = {
        id:1,
        title:'Blog 1',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem facere iste ad, quae maiores delectus, eum officiis reiciendis iure porro corrupti in quod. Illo reiciendis quisquam illum, asperiores quis possimus modi eaque voluptate quasi, dicta dolor quos amet eligendi dolore. Rerum ex sit dolores veritatis totam iusto enim. Sed alias, consequatur voluptatem quia praesentium atque tempora magnam? Ullam sit voluptates nostrum explicabo veniam nisi obcaecati ex. Debitis provident neque, quibusdam quia natus aliquid autem, fugiat similique voluptatem id quisquam placeat dolorem, eligendi officia asperiores dolorum cum vero possimus modi architecto qui sed nam voluptatum itaque. Officia doloribus dolor libero.',
        time : new Date()
    }
  return (
    <Wrapper>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem facere iste ad, quae maiores delectus, eum officiis reiciendis iure porro corrupti in quod. Illo reiciendis quisquam illum, asperiores quis possimus modi eaque voluptate quasi, dicta dolor quos amet eligendi dolore. Rerum ex sit dolores veritatis totam iusto enim. Sed alias, consequatur voluptatem quia praesentium atque tempora magnam? Ullam sit voluptates nostrum explicabo veniam nisi obcaecati ex. Debitis provident neque, quibusdam quia natus aliquid autem, fugiat similique voluptatem id quisquam placeat dolorem, eligendi officia asperiores dolorum cum vero possimus modi architecto qui sed nam voluptatum itaque. Officia doloribus dolor libero. */}
        <Navbar/>
        <Singleblog data={singleblog}/>
        <NewsLater/>
        <Footer/>
    </Wrapper>
  )
}

export default SinglePost