import Link from 'next/link';
import React from 'react';

export const Post = (props) => {
  const { post } = props;
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`} passHref>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};
