class Zump {
    constructor(opt) {
        //Default config
        this.opt = {
            target: null,
            alignTop: false,
            delay: 20,
            min: 0,
            max: 5,
            Frames: 50,
            focus: true,
            loop: false,
            style: "margin-left:{v}px"
        };
        this.Frame = 0;
        this.AssignOpt(opt);

        this.Play();
    }

    //Start Animation
    Play = function () {
        this.el = document.querySelectorAll(this.opt.target);
        //Copy of original dom
        this.elB = Object.assign({}, this.el);
        if (this.opt.focus) {
            this.Focus();
        }
        this.Animate();
    }

    //Stop Animation 
    Stop = function () {
        this.stopped = true;
        this.Restore();
    }

    ///Merge user configuration with default settings
    AssignOpt = function (target) {
        if (!target) return;
        for (var key in this.opt) {
            if (target[key] != null) {
                this.opt[key] = target[key];
            }
        }
    }

    //Scroll to view
    Focus = function () {
        this.el[0].scrollIntoView(this.opt.alignTop);
    }



    //Restore dom elemtn to original style state
    Restore = function () {
        this.Frame = 0;
        for (let i = 0; i < this.el.length; i++) {
            this.el[i].style = this.elB[i].style;
        }
    }

    //Recursive animation 
    Animate = function () {
        this.Frame++;
        setTimeout(() => {
            //Stop if limit frame reached or stop command recieved
            if ((this.Frame >= this.opt.Frames && !this.opt.loop) || this.stopped) {
                if (!this.stopped) {
                    this.Restore();
                } else {
                    this.stopped = false;
                }
                return;
            }
            for (let j = 0; j < this.el.length; j++) {
                //calculate rate of change
                var pos = this.opt.min + (this.opt.max - this.opt.min) * ((Math.sin(this.Frame) + 1) / 2)
                //apply to style
                this.el[j].style.cssText = this.opt.style.replace("{v}", pos);
            }

            this.Animate();
        }, this.opt.delay);
    }
}
