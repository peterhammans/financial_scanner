import React, { useState } from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import DropdownManager from './DropdownManager';
import DropdownReference from './DropdownReference';
import DropdownPopper from './DropdownPopper';
import { Popper } from 'react-popper';

storiesOf('Dropdown', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Default', () => {
    return React.createElement(() => {
      const [open, setOpen] = useState(false);
      const containerRef = React.createRef<HTMLDivElement>();

      return (
        <span ref={containerRef}>
          <DropdownManager>
            <DropdownReference>
              {({ ref }) => (
                <button type="button" ref={ref} onClick={() => setOpen(!open)}>
                  Reference
                </button>
              )}
            </DropdownReference>
            <DropdownPopper
              onClickOutside={() => { setOpen(false) }}
              containerRef={containerRef}
            >
              {({ placement, ref, style }) => {
                return open && (
                  <div ref={ref} style={style} data-placement={placement}>
                    Popper
                  </div>
                )
              }}
            </DropdownPopper>
          </DropdownManager >
        </span>
      )
    })
  });