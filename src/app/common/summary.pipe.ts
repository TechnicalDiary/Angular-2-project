import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value, arg1,arg2){
        var limit= (arg1) ? parseInt(arg1):50;
        if(value)
            return value.substring(0,limit) + '...';
        return null;
    }
}