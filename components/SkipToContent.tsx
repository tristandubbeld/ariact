import { styled } from '@/design-system/stitches.config';

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: '$white',
  borderBottom: '1px solid $gray300',
  padding: '$2',
  transform: 'translateY(-100%)',
  transition: 'transform .2s',

  '&:focus-within': {
    transform: 'translateY(0)',
  },

  '@bp2': {
    padding: '$4',
  },
});

// TODO: add sidebar when we have a SideBar

export const SkipToContent = () => {
  return (
    <Container>
      <div>
        <a href="#main">Skip to content</a>
      </div>
      {/* <div>
        <a href="#">Skip to sidebar</a>
      </div> */}
    </Container>
  );
};
