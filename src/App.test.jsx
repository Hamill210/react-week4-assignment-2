import React from 'react';

import { render } from '@testing-library/react';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(
      (
        <div>
          <h1>Restaurants</h1>
        </div>
      ),
    );

    const title = (getByText(/Restaurants/));

    expect(title).not.toBeNull();
  });
});
