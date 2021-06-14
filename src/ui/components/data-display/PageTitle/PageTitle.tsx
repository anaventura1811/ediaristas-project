import React from 'react'

interface PageTitleProps {
  title: string;
  subtitle: string;
}

function PageTitle({ title, subtitle } : PageTitleProps) : JSX.Element {
  return (
    <div>
      { title }
      { subtitle }
    </div>
  )
}

export default PageTitle;
