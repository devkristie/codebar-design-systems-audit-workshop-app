import type { HeadingProps } from "./Heading-type"

export const Heading = ({children} : HeadingProps) => {
    return (
        <h2 className="govuk-heading-m">{children}</h2>
    )
}