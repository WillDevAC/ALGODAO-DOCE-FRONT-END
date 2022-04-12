# stylis-plugin-rtl

Stylis RTL plugin based on CSSJanus

## Usage with styled-components v5+

```javascript
import styled, { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";

const Box = styled.div`
  padding-left: 10px;
`;

function MakeItRTL() {
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      <Box>My padding will be on the right!</Box>
    </StyleSheetManager>
  );
}
```

<small>This is a fork of `stylis-rtl` for use with styled-components v5+</small>
