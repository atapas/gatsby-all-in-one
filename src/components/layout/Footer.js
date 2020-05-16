import React from "react"

import { css } from "@emotion/core";
import { Link } from "gatsby";
import { rhythm } from "../../utils/typography";

export default () => {
    return (
        <footer
            css={css`
            margin-top: ${rhythm(2)};
        `}
        >
            <Link to={`/`}>Home</Link> {' | '}
            <Link to={`/about/`} >About</Link> {' | '}
            <a href={`/admin/`} target='_blank' rel="noopener noreferrer"> admin </a>
        </footer>
    )
}