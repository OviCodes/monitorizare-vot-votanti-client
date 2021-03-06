import React from 'react';
import ItemStats from './item-stats';

export default function RightColumn(props) {
  return (
    <div>
      <h2>Statistici dupa tipurile de sesizari</h2>
      <div className="row">
        {props.stats.incidentsByType.map((item, index) =>
          <ItemStats
            key={index}
            title={item.count}
            subtitle={item.type ? item.type.name : ''}
            columns="col-xs-12 col-sm-6"
          />
        )}
      </div>
    </div>
  );
}

RightColumn.propTypes = {
  stats: React.PropTypes.object,
};
