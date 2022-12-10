// import ArrowRight from "@modules/common/icons/arrow-right"
import { ArrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"



const UnderlineLink = ({}) => {
  return (
    <div className="flex items-start">
        <Link href="/store">
        <div className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">

            <span>Check it out</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    </div>
  )
}

export default UnderlineLink