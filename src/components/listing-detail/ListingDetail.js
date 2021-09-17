import React from 'react';
import './ListingDetail.css';

function ListingDetail() {
    return (
        <div className="listing-detail">
            <div className="listing-detail-content">
                <img className="listing-detail-img" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h1 className="listing-detail-title">
                    Awesome property
                    <div className="listing-detail-action">
                        <i class="listing-detail-action-icon fas fa-edit"></i>
                        <i class="listing-detail-action-icon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="listing-detail-meta-info">
                    <span className="listing-detail-author">Author - <strong>John Doe</strong></span>
                    <span className="listing-detail-time">1 day ago</span>
                </div>
                <p className="listing-detail-decription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula pretium sem ac tincidunt. Nulla eu nulla non mauris fermentum egestas eu suscipit tortor. Etiam luctus fermentum mauris eget congue. Nam efficitur est eget augue hendrerit eleifend. Praesent pharetra magna felis, ac pellentesque purus pretium vulputate. Cras vehicula diam mauris, in condimentum tellus laoreet non. Proin mattis tortor aliquam, lobortis mauris quis, ultrices magna. Morbi ante arcu, consequat a dolor sed, euismod gravida arcu.

                    Sed id purus efficitur, congue mi eu, ornare felis. Morbi ac est in felis auctor interdum ac ut erat. Nunc et quam sit amet felis sollicitudin elementum. Morbi luctus ultricies ligula, vitae fermentum nibh congue nec. Fusce feugiat id ligula eget rhoncus. Maecenas feugiat ultricies nisi sit amet aliquet. Mauris vitae augue sed ex tincidunt varius quis nec ex. Quisque nec sodales tellus. Proin neque lectus, egestas eu porta a, dictum vitae elit. Nullam et elit ligula. Duis ex felis, consectetur sed blandit vel, mattis in nibh. Curabitur dapibus euismod mauris, sit amet tristique arcu volutpat sit amet. In vitae velit purus. Sed nec nisl dolor. In tempor pulvinar luctus.

                </p>
            </div>
        </div>
    )
}

export default ListingDetail
