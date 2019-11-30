import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showMen: boolean = false;
  showWomen: boolean = false;
  showKids: boolean = false;
  showHome: boolean = false;
  showDiscover: boolean = false;

  columns_men = [
    {
      name: 'Men',
      sections: [
        {
          heading: 'Topwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Men',
      sections: [
        {
          heading: 'Bottomwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Men',
      sections: [
        {
          heading: 'Footwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Men',
      sections: [
        {
          heading: 'Sports & Active Wear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    }
  ];
  columns_women = [
    {
      name: 'Women',
      sections: [
        {
          heading: 'Topwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Women',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Casual Shirts'}
          ]
        }
      ]
    },

    {
      name: 'Women',
      sections: [
        {
          heading: 'Bottomwear',
          links: [
            {label: 'Jeans'},
            {label: 'Casual Shirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Women',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Women',
      sections: [
        {
          heading: 'Footwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Women',
      sections: [
        {
          heading: 'Sports & Active Wear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    }
  ];
  columns_kids = [
    {
      name: 'Kids',
      sections: [
        {
          heading: 'Topwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Boys',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Kids',
      sections: [
        {
          heading: 'Bottomwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Girls',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Kids',
      sections: [
        {
          heading: 'Footwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Kids',
      sections: [
        {
          heading: 'Sports & Active Wear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    }
  ];
  columns_home = [
    {
      name: 'Home & Living',
      sections: [
        {
          heading: 'Bed Linen & Furnishing',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Home & Living',
      sections: [
        {
          heading: 'Home Décor',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Home & Living',
      sections: [
        {
          heading: 'Kitchen & Table',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Home & Living',
      sections: [
        {
          heading: 'Brands',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    }
  ];
  columns_discover = [
    {
      name: 'Discover',
      sections: [
        {
          heading: 'Brands For Him',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Discover',
      sections: [
        {
          heading: 'Trends For Him',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Discover',
      sections: [
        {
          heading: 'Footwear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    },

    {
      name: 'Discover',
      sections: [
        {
          heading: 'Sports & Active Wear',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        },
        {
          heading: 'Ethnic Wear For Men',
          links: [
            {label: 'T-Shirts'},
            {label: 'Casual Shirts'},
            {label: 'Formal Shirts'},
            {label: 'Sweatshirts'},
            {label: 'Sweaters'}
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  showMenu(name){
    this.showMen = false;
    this.showWomen = false;
    this.showKids = false;
    this.showHome = false;
    this.showDiscover = false;
    switch (name) {
      case "Men":
        this.showMen = true;
        break;
      case "Women":
        this.showWomen = true;
        break;
      case "Kids":
        this.showKids = true;
        break;
      case "Home":
        this.showHome = true;
        break;
      case "Discover":
        this.showDiscover = true;
        break;
    }
  }

  hideMenu(event){
    if(this.showMen) this.showMen = !this.showMen;
    if(this.showWomen) this.showWomen = !this.showWomen;
    if(this.showKids) this.showKids = !this.showKids;
    if(this.showHome) this.showHome = !this.showHome;
    if(this.showDiscover) this.showDiscover = !this.showDiscover;
  }
}
