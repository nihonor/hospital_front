import { FC } from "react";

interface ArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  height?: string;
  display?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const Article: FC<ArticleProps> = ({
  title,
  description,
  imageUrl,
  height = "h-48",
  display = "grid grid-cols-2",
  imageWidth = "w-36",
  imageHeight = "h-full",
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden ${display} p-5 w-full ${height} m-6`}
      >
        <div className="flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className={`${imageWidth} ${imageHeight} rounded-lg object-cover`}
          />
        </div>

        <div className="">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
          <button className="mt-4 text-pr-color hover:text-pr-color/80 text-sm font-medium">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
